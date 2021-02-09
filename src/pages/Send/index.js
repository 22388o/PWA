import React, { useCallback, useState } from "react";
import Http from "../../utils/Http";
import SlidePay from "../../common/SlidePay";
import InputGroup from "../../common/InputGroup";
import ContactSearch from "../../common/ContactsSearch";
import DialogPageContainer from "../../common/DialogPageContainer";
import Suggestion from "../../common/ContactsSearch/components/Suggestion";
import Loader from "../../common/Loader";
import "./css/index.css";

const SendPage = () => {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [unit, setUnit] = useState("sats");
  const [contact, setContact] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const onInputChange = useCallback(e => {
    if (e.target.name === "amount") {
      setAmount(e.target.value);
    }

    if (e.target.name === "description") {
      setDescription(e.target.value);
    }

    if (e.target.name === "unit") {
      setUnit(e.target.value);
    }
  }, []);

  const selectContact = useCallback(async contact => {
    console.log("selectContact:", contact);
    setLoading(true);
    setContact(contact);

    if (contact && contact.type === "invoice") {
      // Do invoice decoding
      const { data } = await Http.post("/api/lnd/decodePayReq", {
        payReq: contact.paymentRequest
      });

      const { decodedRequest } = data;

      setAmount(decodedRequest.num_satoshis);
      setUnit("sats");
      setDescription(decodedRequest.description);
    }

    setLoading(false);
  }, []);

  const sendBTCPayment = useCallback(async () => {
    if (contact) {
      const { data: payment } = await Http.post("/api/lnd/sendcoins", {
        addr: contact.address,
        amount: amount
      });
      console.log(payment);
    }
  }, [amount, contact]);

  const sendLightningPayment = useCallback(async () => {
    if (contact) {
      const { data: payment } = await Http.post("/api/lnd/sendpayment", {
        dest: contact.dest,
        payreq: contact.paymentRequest,
        amt: contact.paymentRequest ? "0" : amount,
        feeLimit: amount * 0.006 + 10, // TODO: Hardcoded fees for now
        keysend: contact.type === "keysend"
      });
      console.log(payment);
    }
  }, [amount, contact]);

  const sendGunPayment = useCallback(async () => {
    if (contact) {
      const { data: gunPayment } = await Http.post("/api/gun/sendpayment", {
        recipientPub: contact.pk,
        amount: parseInt(amount),
        feeLimit: amount * 0.006 + 10, // TODO: Hardcoded fees for now
        memo: description
      });
      console.log(gunPayment);
    }
  }, [amount, contact, description]);

  const onSubmit = useCallback(async () => {
    try {
      setError("");
      setPaymentLoading(true);

      if (contact?.type === "btc") {
        await sendBTCPayment();
      }

      if (["invoice", "keysend"].includes(contact?.type)) {
        await sendLightningPayment();
      }

      if (contact?.type === "contact") {
        await sendGunPayment();
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data.errorMessage ?? err.message);
      throw err;
    } finally {
      setPaymentLoading(false);
    }
  }, [contact, sendBTCPayment, sendGunPayment, sendLightningPayment]);

  return (
    <DialogPageContainer containerClassName="send-page" title="SEND">
      <div className="send-form-container">
        {paymentLoading ? (
          <Loader fullScreen overlay text="Processing Payment..." />
        ) : null}
        {error ? <p className="form-error">{error}</p> : null}
        {!contact ? (
          <div className="scan-qr-btn">
            <i className="scan-qr-icon icon icon-solid-scan"></i>
            <p className="scan-qr-text">Scan QR</p>
          </div>
        ) : null}
        {contact ? (
          <Suggestion
            selected
            contact={contact}
            selectContact={selectContact}
          />
        ) : (
          <ContactSearch
            selectContact={selectContact}
            features={["btc", "keysend", "contact", "invoice"]}
          />
        )}
        <div className="inputs-group">
          <InputGroup
            name="amount"
            label="Enter Amount"
            onChange={onInputChange}
            value={amount}
            disabled={contact?.type === "invoice"}
            inputMode="decimal"
          />
          <select
            name="unit"
            className="unit-dropdown"
            onChange={onInputChange}
            value={unit}
            disabled={contact?.type === "invoice"}
          >
            <option value="sats">Sats</option>
            <option value="msats">mSats</option>
            <option value="btc">BTC</option>
          </select>
        </div>
        <InputGroup
          name="description"
          label="Description"
          element="textarea"
          onChange={onInputChange}
          type="textarea"
          value={description}
          disabled={contact?.type === "invoice"}
        />
      </div>
      <SlidePay disabled={!contact} onSuccess={onSubmit} />
    </DialogPageContainer>
  );
};

export default SendPage;
