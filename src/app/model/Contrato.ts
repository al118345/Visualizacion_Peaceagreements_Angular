
/*
generado con
http://json2ts.com/
 */
export class Bank {
  constructor(
    public id: number,
    public name: string
  ) { }
}

export class Owner {
  constructor(
    public id: number,
    public name: string,
    public vat: string,
  ) { }



}

export class BankAccount {
  constructor(
    public bank: Bank,
    public id: number,
    public owner: Owner,
    public printable_iban: string,
  ) { }



}

export class Cnae {
  constructor(
    public code: string,
    public description: string,
    public id: number,
  ) { }



}

export class Cups {
  constructor(
    public id: number,
    public name: string,
    public street: string,
  ) { }



}

export class Dso {
  constructor(
    public id: number,
    public name: string,
  ) { }



}

export class FiscalPartner {
  constructor(
    public id: number,
    public name: string,
    public vat: string,
  ) { }



}

export class NotificationAddress {
  constructor(
    public email: string,
    public id: number,
    public mobile: string,
    public phone: any,
    public street: string
  ) { }



}

export class OwnerPartner {
  constructor(
    public id: number,
    public name: string,
    public vat: string,
  ) { }



}

export class Pricelist {
  constructor(
    public id: number,
    public name: string,
  ) { }



}

export class Tariff {
  constructor(
    public id: number,
    public name: string,
  ) { }



}

export class Contrato {
  constructor(
    public amount_debt: number,
    public amount_pending: number,
    public bank_account: BankAccount,
    public cnae: Cnae,
    public contracted_power: number,
    public cups: Cups,
    public dso: Dso,
    public dso_phone: string,
    public dso_reference: string,
    public end_date: any,
    public fiscal_partner: FiscalPartner,
    public id: number,
    public name: string,
    public notification_address: NotificationAddress,
    public owner_partner: OwnerPartner,
    public pricelist: Pricelist,
    public start_date: string,
    public state: string,
    public tariff: Tariff,
  ) { }
}

export class ListaContratos {
  constructor(
    public items: Contrato[],
    public limit: number,
    public n_items: number,
    public offset: number,
  ) { }
}


