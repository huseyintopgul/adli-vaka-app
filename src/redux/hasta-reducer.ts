import { Hasta } from '../model/types';
import { AddRecordAction, LOAD_RECORDS, LoadRecordAction, NEW_RECORD } from './hasta-action'

const baslangicDurumu = {
    hastalar: []
}

const localStorageKey = 'hasta_kayitlari';
const addToLocalStorage = (hasta: Hasta) => {
    const hastalar: Hasta[] = getFromLocalStorage();
    hastalar.push(hasta);
    localStorage.setItem(localStorageKey, JSON.stringify(hastalar));
}

const getFromLocalStorage = () => {
    const hastalar = localStorage.getItem(localStorageKey);
    if (hastalar) {
        return JSON.parse(hastalar);
    }
    return []
}

const hastaReducer = (state = baslangicDurumu, action: AddRecordAction | LoadRecordAction) => {
    switch (action.type) {
        case NEW_RECORD:
            addToLocalStorage(action.payload.hasta);
            return { ...state, hastalar: [...state.hastalar, action.payload.hasta] }
        case LOAD_RECORDS:
            return { ...state, hastalar: getFromLocalStorage() }
        default:
            return state
    }

}
export default hastaReducer