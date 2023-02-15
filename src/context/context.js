import React from "react";

const PortfolioContext = React.createContext();
PortfolioContext.name = "Prakriti";
export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;
