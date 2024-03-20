import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  ticketInformation = {
    personalInformation: {
        firstname: '',
        lastname: '',
        phone: null
    },
    seatInformation: {
        class: null,
        wagon: null,
        seat: null
    },
    paymentInformation: {
        cardholderName: '',
        cardholderNumber: '',
        date: '',
        cvv: '',
        remember: false
    }
};

private paymentComplete = new Subject<any>();

paymentComplete$ = this.paymentComplete.asObservable();

getTicketInformation() {
    return this.ticketInformation;
}

setTicketInformation(ticketInformation:any) {
    this.ticketInformation = ticketInformation;
}

complete() {
    this.paymentComplete.next(this.ticketInformation.personalInformation);
}
}
