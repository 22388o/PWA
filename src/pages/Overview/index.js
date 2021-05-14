// @ts-check
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PullToRefresh from "react-simple-pull-to-refresh";
import { DateTime } from "luxon";

import {
  fetchWalletBalance,
  fetchUSDRate,
  fetchUnifiedTransactions,
  FetchLightningInfo
} from "../../actions/WalletActions";
import { convertSatsToUSD, formatNumber } from "../../utils/Number";
import { capitalizeText } from "../../utils/String";
import BottomBar from "../../common/BottomBar";
import Loader from "../../common/Loader";
import MainNav from "../../common/MainNav";
import Transaction from "./components/Transaction";
import "./css/index.scoped.css";

import * as Store from "../../store";

const OverviewPage = () => {
  const dispatch = useDispatch();
  const totalBalance = Store.useSelector(
    ({ wallet }) => wallet.totalBalance ?? "0"
  );
  const USDRate = Store.useSelector(({ wallet }) => wallet.USDRate ?? "0");
  const recentTransactions = Store.useSelector(
    ({ wallet }) => wallet.recentTransactions
  );

  useEffect(() => {
    fetchWalletBalance()(dispatch);
    fetchUSDRate()(dispatch);
    fetchWalletBalance()(dispatch);
    fetchUnifiedTransactions()(dispatch);
    FetchLightningInfo()(dispatch);
  }, [dispatch]);

  const totalBalanceUSD = useMemo(
    () => formatNumber(convertSatsToUSD(totalBalance, USDRate).toFixed(2)),
    [USDRate, totalBalance]
  );

  const formattedBalance = useMemo(() => formatNumber(totalBalance), [
    totalBalance
  ]);

  return (
    <div className="page-container overview-page no-scrollbar">
      <div className="overview-header">
        <MainNav absolute pageTitle={undefined} />
        <div className="overview-balance-container">
          <p className="overview-balance-btc">
            {formattedBalance}{" "}
            <span className="overview-balance-unit">Sats</span>
          </p>
          <p className="overview-balance-usd">{totalBalanceUSD} USD</p>
        </div>
        <div className="overview-actions">
          <Link to="/send" className="overview-action overview-action-send">
            <p className="overview-action-text">Send</p>
          </Link>
          <Link
            to="/request"
            className="overview-action overview-action-request"
          >
            <p className="overview-action-text">Request</p>
          </Link>
        </div>
      </div>
      <div className="recent-activity-container">
        <p className="recent-activity-title">Recent Activity</p>
        <PullToRefresh
          className="recent-activity-entries no-scrollbar"
          pullingContent={
            <div className="pull-refresh-text">
              <i className="fas fa-arrow-down"></i> Pull down to refresh{" "}
              <i className="fas fa-arrow-down"></i>
            </div>
          }
          refreshingContent={<Loader small text="" />}
          pullDownThreshold={75}
          onRefresh={() => {
            return fetchUnifiedTransactions()(dispatch);
          }}
        >
          <>
            {recentTransactions.map(transaction => (
              <Transaction
                time={
                  transaction.date
                    ? DateTime.fromSeconds(
                        parseInt(transaction.date, 10)
                      ).toRelative()
                    : "unknown"
                }
                message={
                  transaction.message ||
                  `${capitalizeText(transaction.type)} Transaction`
                }
                username={capitalizeText(transaction.type)}
                value={formatNumber(transaction.value)}
                key={transaction.hash}
                type={transaction.type}
              />
            ))}
          </>
        </PullToRefresh>
      </div>
      <BottomBar />
    </div>
  );
};

export default OverviewPage;
