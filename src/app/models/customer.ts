export class Customer {

  constructor(public firstName = '',
    public lastName = '',
    public email = '',
    public subscribeNewsLetter = false,
    public address1?: string,
    public address2?: string,
    public city?: string,
    public state = '',
    public zip?: string,
    public phoneNumber?: string,
    public secondaryPhoneNumber?: string) { }
}
