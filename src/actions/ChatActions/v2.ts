import { createAction } from "@reduxjs/toolkit";
import * as Common from "shock-common";

import * as Utils from "../../utils";
import * as Schema from "../../schema";
import { rifle } from "../../utils/WebSocket";

//#region receivedRequests

/**
 * Dispatched when the handshake address changes.
 */
export const handshakeAddressUpdated = createAction<{
  handshakeAddress: string;
}>("handshakeAddressUpdated");

/**
 * Subscribe to the current handshake address stored in gun.
 * @returns A thunk that returns a subscription.
 */
export const subCurrentHandshakeAddress = () => (
  dispatch: (action: any) => void
) => {
  try {
    return rifle({
      query: `$user::currentHandshakeAddress::on`,
      onData: handshakeAddress => {
        dispatch(
          handshakeAddressUpdated({
            handshakeAddress
          })
        );
      }
    });
  } catch (e) {
    alert(
      `Could not establish a subscription to current handshake address: ${e.message}`
    );
    Utils.logger.error(
      `Could not establish a subscription to current handshake address:`,
      e
    );
  }
};

/**
 * Dispatched when a handshake request is received inside the current handshake
 * node.
 */
export const receivedHandshakeRequest = createAction<{
  receivedRequest: Schema.ReceivedRequest;
}>("chat/receivedHandshakeRequest");

/**
 * Subscribe to received requests inside the specified handshake node.
 * @returns A thunk that returns a subscription.
 */
export const subHandshakeNode = (handshakeAddress: string) => (
  dispatch: (action: any) => void,
  getState: () => { chat: { currentHandshakeAddress: string } }
): Promise<Schema.Subscription> => {
  try {
    return rifle({
      query: `$gun::handshakeNodes>${handshakeAddress}::map.on`,
      onData: (handshakeRequest: Common.HandshakeRequest, id) => {
        const {
          chat: { currentHandshakeAddress }
        } = getState();
        if (handshakeAddress !== currentHandshakeAddress) {
          return;
        }
        if (!Common.isHandshakeRequest(handshakeRequest)) {
          return;
        }
        dispatch(
          receivedHandshakeRequest({
            receivedRequest: {
              avatar: null,
              displayName: null,
              id,
              pk: handshakeRequest.from,
              timestamp: handshakeRequest.timestamp
            }
          })
        );
      }
    });
  } catch (e) {
    alert(
      `Could not establish a subscription to handshake node with address: ${handshakeAddress} : ${e.message}`
    );
    Utils.logger.error(
      `Could not establish a subscription to handshake node with address: ${handshakeAddress} : `,
      e
    );
  }
};

//#endregion receivedRequests

//#region conversations

/**
 * Dispatched when one pub to outgoing pair is received from the pub to
 * outgoings map in gun.
 */
export const recipientToOutgoingReceived = createAction<{
  outgoingID: string | null;
  publicKey: string;
}>("chat/recipientToOutgoingReceived");

/**
 * Subscribe to data and changes in the pub to outgoings map stored in gun.
 * @returns A thunk that returns a subscription.
 */
export const subRecipientToOutgoing = () => (
  dispatch: (action: any) => void,
  getState: () => { node: { publicKey: string } }
): Promise<Schema.Subscription> => {
  try {
    const selfPublicKey = getState().node.publicKey;

    if (!Common.isPopulatedString(selfPublicKey)) {
      throw new Error(`Self public key not a populated string`);
    }

    return rifle({
      query: `$user::recipientToOutgoing::map.on`,
      publicKey: selfPublicKey,
      onData: (outgoingID, publicKey) => {
        dispatch(
          recipientToOutgoingReceived({
            outgoingID,
            publicKey
          })
        );
      }
    });
  } catch (e) {
    alert(
      `Could not establish a subscription to recipientToOutgoing: ${e.message}`
    );
    Utils.logger.error(
      `Could not establish a subscription to recipientToOutgoing`,
      e
    );
  }
};

/**
 * Dispatched when one pub to incoming pair is received from the user to
 * incoming map in gun.
 */
export const userToIncomingReceived = createAction<{
  incomingID: string | null;
  publicKey: string;
}>("chat/userToIncomingReceived");

/**
 * Subscribe to data and changes in the user to incoming map stored in gun.
 * @returns A thunk that returns a subscription.
 */
export const subUserToIncoming = () => (
  dispatch: (action: any) => void,
  getState: () => { node: { publicKey: string } }
): Promise<Schema.Subscription> => {
  try {
    const selfPublicKey = getState().node.publicKey;

    if (!Common.isPopulatedString(selfPublicKey)) {
      throw new Error(`Self public key not a populated string`);
    }

    return rifle({
      query: `$user::userToIncoming::map.on`,
      publicKey: selfPublicKey,
      onData: (incomingID, publicKey) => {
        dispatch(
          userToIncomingReceived({
            incomingID,
            publicKey
          })
        );
      }
    });
  } catch (e) {
    alert(`Could not establish a subscription to userToIncoming: ${e.message}`);
    Utils.logger.error(
      `Could not establish a subscription to userToIncoming`,
      e
    );
  }
};

//#endregion conversations

//#region sentRequests

export const storedReqUpdated = createAction<{
  storedReq: Common.StoredRequest | null;
  storedReqID: string;
}>("chat/storedReqUpdated");

export const subStoredReqs = () => (
  dispatch: (action: any) => void,
  getState: () => { node: { publicKey: string } }
): Promise<Schema.Subscription> => {
  const {
    node: { publicKey }
  } = getState();
  if (!publicKey) {
    throw new TypeError(`No self public key.`);
  }

  try {
    return rifle({
      query: `$user::storedReqs::map.on`,
      publicKey,
      onData(storedReq, storedReqID) {
        if (storedReq === null || Common.isStoredRequest(storedReq)) {
          dispatch(
            storedReqUpdated({
              storedReq,
              storedReqID
            })
          );
        }
      }
    });
  } catch (e) {
    alert(
      `Could not subscribe to stored requests (sent requests): ${e.message}`
    );
    Utils.logger.error(`Could not subscribe to stored requests: `, e);
  }
};

export const pubToAddressUpdated = createAction<{
  address: string;
  pub: string;
}>("chat/pubToAddressUpdated");

export const subPubToAddress = (pubs: string[]) => (
  dispatch: (action: any) => void
): Promise<Schema.Subscription> => {
  try {
    return Promise.all(
      pubs.map(pub =>
        rifle({
          query: `${pub}::currentHandshakeAddress::on`,
          onData(address) {
            dispatch(
              pubToAddressUpdated({
                address,
                pub
              })
            );
          }
        })
      )
    ).then(subs => ({
      off() {
        subs.forEach(sub => sub.off());
      }
    }));
  } catch (e) {
    alert(`Could not sub pub to address: ${e.message}`);
    Utils.logger.error(`Could not sub pub to address: `, e);
  }
};

export const userToLastReqSentUpdated = createAction<{
  user: string;
  lastReqSent: string | null;
}>("chat/userToLastReqSentUpdated");

export const subUserToLastReqSent = () => (
  dispatch: (action: any) => void,
  getState: () => { node: { publicKey: string } }
): Promise<Schema.Subscription> => {
  try {
    const {
      node: { publicKey }
    } = getState();

    if (!publicKey) {
      throw new TypeError(`No self public key?`);
    }

    return rifle({
      query: `$user::USER_TO_LAST_REQUEST_SENT::map.on`,
      publicKey,
      onData(lastReqSent, user) {
        dispatch(
          userToLastReqSentUpdated({
            lastReqSent,
            user
          })
        );
      }
    });
  } catch (e) {
    alert(`Could not sub to user to last request sent: ${e.message}`);
    Utils.logger.error(`Could not sub to user to last request sent: `, e);
  }
};

//#endregion sentRequests
