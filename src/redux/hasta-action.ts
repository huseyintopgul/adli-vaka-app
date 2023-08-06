import { Action } from 'redux';
import { Hasta } from '../model/types';


export const NEW_RECORD = 'yeni_hasta_kaydi';
export const LOAD_RECORDS = 'tum_kayitlari_goster';



export interface AddRecordAction extends Action<typeof NEW_RECORD> {
    payload: {
        hasta: Hasta
    }
}

export interface LoadRecordAction extends Action<typeof LOAD_RECORDS> {

}

export const newRecord = (hasta: Hasta): AddRecordAction => ({
    type: NEW_RECORD,
    payload: { hasta }
})

export const loadRecords = (): LoadRecordAction => ({
    type: LOAD_RECORDS
})


