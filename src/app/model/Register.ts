

    export class UrlParams {   constructor(
    ) { } }

    export class Next {   constructor(
        public disabled: boolean,
        public label: string,
        public primary: boolean,
        public safeClick: boolean,
        public submit: boolean,
        public url: string,
        public url_params: UrlParams,
    ) { } }

    export class Buttons {   constructor(
        public next: Next,
    ) { } }

    export class Errors {   constructor(
        //public FormConfirm.contract: string[],
       //public FormConfirm.cups: string[],
    ) { } }

    export class Render {   constructor(
        public buttons: Buttons,
        public done: boolean,
        public errors: Errors,
        public form: any[],
        public step: string,
        public steps: number,
        public title: string,
    ) { } }

    export class AcceptConditions {   constructor(
        public title: string,
        public type: string,
    ) { } }

    export class Contract {   constructor(
        public title: string,
        public type: string,
    ) { } }

    export class Form {   constructor(
        public placeholder: string,
    ) { } }

    export class Cups {   constructor(
        public form: Form,
        public maxLength: number,
        public minLength: number,
        public title: string,
        public type: string,
    ) { } }

    export class Form2 {   constructor(
        public placeholder: string,
    ) { } }

    export class Email {   constructor(
        public form: Form2,
        public pattern: string,
        public title: string,
        public type: string,
        public validationMessage: string,
    ) { } }

    export class Form3 {   constructor(
        public placeholder: string,
    ) { } }

    export class Email2 {   constructor(
        public form: Form3,
        public pattern: string,
        public title: string,
        public type: string,
        public validationMessage: string,
    ) { } }

    export class Form4 {   constructor(
        public placeholder: string,
    ) { } }

    export class Nif {   constructor(
        public form: Form4,
        public maxLength: number,
        public minLength: number,
        public pattern: string,
        public title: string,
        public type: string,
    ) { } }

    export class Form5 {   constructor(
        public description: string,
        public type: string,
    ) { } }

    export class OvConditions {   constructor(
        public form: Form5,
        public title: string,
        public type: string,
    ) { } }

    export class Properties {   constructor(
        public accept_conditions: AcceptConditions,
        public contract: Contract,
        public cups: Cups,
        public email: Email,
        public email2: Email2,
        public nif: Nif,
        public ov_conditions: OvConditions,
    ) { } }

    export class FormConfirm {   constructor(
        public properties: Properties,
        public required: string[],
        public type: string,
    ) { } }

    export class Definitions {   constructor(
        public FormConfirm: FormConfirm,
    ) { } }

    export class Schema {   constructor(
        public $ref: string,
        public definitions: Definitions,
    ) { } }

    export class Result {   constructor(
        public render: Render,
        public schema: Schema,
    ) { } }

    export class RootObject {   constructor(
        public result: Result,
        public status: number,
    ) { } }

