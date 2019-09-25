
/*
generado con
http://json2ts.com/
 */

export class UrlParams {
  constructor(
    public contract: string,
  ) { }
}

export class Next {
  constructor(
    public  disabled: boolean,
    public label: string,
    public primary: boolean,
    public safeClick: boolean,
    public submit: boolean,
    public url: string,
    public url_params: UrlParams,
  ) { }
}

export class Buttons {
  constructor(
    public next: Next,
  ) { }
}

export class Errors {
  constructor(
  ) { }
}

export class Render {
  constructor(
    public buttons: Buttons,
    public done: boolean,
    public errors: Errors,
    public  form: any[],
    public step: string,
    public steps: number,
    public title: string,
  ) { }
}

export class AccCountryId {
  constructor(
    public format: string,
    public title: string,
    public type: string,
  ) { }
}

export class AlreadyRegistered {
  constructor(
    public enumNames: string[],
    public title: string,
    public type: string,
  ) { }
}

export class Form {
  constructor(
    public condition: string,
    public type: string,
  ) { }
}

export class Bank {
  constructor(
    public enumNames:  string[],
    public form: Form,
    public format: string,
    public title: string,
    public type: string,
  ) { }
}

export class Form2 {
  constructor(
    public condition: string,
    public  placeholder: string,
  ) { }
}

export class Iban {
  constructor(
    public form: Form2,
    public maxLength: number,
    public minLength: number,
    public title: string,
    public type: string,
  ) { }
}

export class OwnerAddressId {
  constructor(
    public format: string,
    public title: string,
    public type: string, ) { }
}

export class OwnerId {
  constructor(
    public format: string,
    public title: string,
    public type: string,
  ) { }
}

export class Form3 {
  constructor(
    public condition: string,
  ) { }
}

export class OwnerIsBankOwner {
  constructor(
    public form: Form3,
    public title: string,
    public type: string,
  ) { }
}

export class PartnerId {
  constructor(
    public format: string,
    public title: string,
    public type: string,
  ) { }
}

export class State {
  constructor(
    public title: string,
    public type: string,
  ) { }
}

export class Properties {
  constructor(
    public acc_country_id: AccCountryId,
    public already_registered: AlreadyRegistered,
    public bank: Bank,
    public  iban: Iban,
    public  owner_address_id: OwnerAddressId,
    public  owner_id: OwnerId,
    public owner_is_bank_owner: OwnerIsBankOwner,
    public partner_id: PartnerId,
    public state: State,
  ) { }
}

export class FormChangeIban {
  constructor(
    public properties: Properties,
    public required: string[],
    public type: string,
  ) { }
}

export class Definitions {
  constructor(
    public  FormChangeIban: FormChangeIban,
  ) { }
}

export class Schema {
  constructor(
    public $ref: string,
    public  definitions: Definitions,
  ) { }
}

export class Result {
  constructor(
    public  render: Render,
    public schema: Schema,
  ) { }
}

export class RootObject {
  constructor(
    public result: Result,
    public tatus: number,
  ) { }
}
