import { Injectable } from '@nestjs/common';

@Injectable() 
export class PowerService {
    suplyPower(watts: number) {
        console.log(`Supplying ${watts} watts worth of power`)
    }
}
