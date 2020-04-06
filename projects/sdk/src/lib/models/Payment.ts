import { PaymentType } from './PaymentType';
import { PaymentTransaction } from './PaymentTransaction';

export interface Payment<TPaymentXp = any, TTransactionsXp = any> {
    ID?: string
    Type: PaymentType
    readonly DateCreated?: string
    CreditCardID?: string
    SpendingAccountID?: string
    Description?: string
    Amount?: number
    Accepted?: boolean
    xp?: TPaymentXp
    readonly Transactions?: PaymentTransaction<TTransactionsXp>[]
}