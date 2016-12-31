export interface Column {
    Caption: string, Type: string
}

export interface User {
    name?: string;
    idNumber?: number;
    email?: string;
    phone?: string;
    birthday?: Date;
    password?: string;
}

export interface AdvisorProperties { name: string; phone: string; mail: string }



export interface Holding {
    securityID: number;
    securityName: string;
}

export interface Transaction {
    transactionID: number;
    transactionAmount: number;

}

export interface GridOptions {
    Columns: Column[];
}

export interface GridData {
    data: Array<any>;
}

export interface LoginProperties {
    name: string; idNumber: string; phone?: string; mail?: string;
}

export interface AccountProperties { Name?: string, Bank?: string; Policy?: string; ID?: number, isAggregate?: boolean; }

export interface AdminProperties { }

export interface PerformanceSummaryValues {
    PerformanceFromYearStart?: number; Performancelast12Month?: number; Performancelast36Month?: number; PortfolioAmount?: number; Account?: AccountProperties
}

export interface AccountTransactionsSummaryValues {
    Account: AccountProperties;
    TransactionsSummaryValues: TransactionsSummaryValues;
}

export interface AccountPerformanceSummaryValues {
    Account: AccountProperties;
    PerformanceSummaryValues: PerformanceSummaryValues;
}

export interface TransactionsSummaryValues {
    TaxFromYearStart?: number; SalesFromYearStart?: number; BuysFromYearStart?: number;
}

export enum HoldingsGroupType {
    Detailed, Currency, AssetClass, Country, Industry
}

export interface HoldingGroupUnit {

    itemID: number;
    itemName: string;
    amount: number;
}

export interface HoldingsToGroup {
    holdingsGroupType: HoldingsGroupType;
    units: Array<HoldingGroupUnit>;
}

export interface AccountHoldingsGroupsUnits {
    entity: AccountProperties;
    units: Array<HoldingsToGroup>;
}

export interface PerformanceUnit {
    date: Date;
    amount: number;
    net: number;
}

export interface TransactionUnit {
    date: Date;
    quantity: number;
    amount: number;

}

export enum Resolution {
    month, startOfYear, last12Monthes, last3Years, byDate
}


export interface AccountPerformanceUnits {
    entity: AccountProperties;
    performancesToResoltion: Array<PerformanceToResoltion>;
}

export interface AccountTransactionsUnits {
    entity: AccountProperties;
    transactionsToResoltion: Array<TransactionsToResoltion>;
}

export interface PerformanceToResoltion {
    resolution: Resolution;
    performanceUnits: Array<PerformanceUnit>;
}

export interface TransactionsToResoltion {
    resolution: Resolution;
    transactionsUnits: Array<TransactionUnit>;
}






export interface ParameterDefinition {
    parameter: Parameter;
    value: any;
}

export enum Parameter {
    AllowWebMessageToAdvisor,
    ContactToAdvisorFilePath,
    DefaultHtml,
    DirectCommunication,
    EnforcePasswordsHistory,
    FalseLoginsToWebSite,
    ForgotIDMsg,
    IdleTimeForWebSite,
    IncomingTiming,
    IncomingTimingMinutes,
    IncomingWatchFile,
    IncomingWebUsersFilePath,
    IsActiveWebSite,
    IsDMZServer,
    LogoAlignment,
    CompanyDisplayName,
    MediatorCommunication,
    OutgoingTiming,
    OutgoingTimingMinutes,
    OutgoingWatchFile,
    OutgoingWebUsersFilePath,
    PasswordsHistoryCounter,
    WebsiteDataFromDate,
    WebsiteDataToDate,
    WebsiteDefinitionsPath,
    WebsiteMainColor,
    WebSiteRegistrationType,
    WebSiteSendingType,
    WebSiteUpdatesEmail,
    CompanyWebsiteLink,
    ColorsPlate,
    DisplayTermsOfUseOnLogin,
    LinkToHomePageForFunds,
    WebSiteUrl,
    ContextualColor,
    SMSProvider,
    SMSUser,
    SMSPassword,
    HeaderAndTotalColor

}

