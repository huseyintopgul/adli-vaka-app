import { Cinsiyet, GelisNedeni, KanGrubu, KanGrubuRh, OdadaBulunanlar } from "./enums"

// TYPES
export type HastaBilgileri = {
    adi: string,
    soyadi: string,
    yas: number | null,
    cinsiyet: Cinsiyet | null,
    kanGrubu: KanGrubu | null,
    kanGrubuRh: KanGrubuRh | null
}

export type GenelBilgiler = {
    gelisNedeni: GelisNedeni | null,
    gelisNedeniAciklama: string,
    odadaBulunanlar: OdadaBulunanlar[] | [],
    darpDurumu: boolean,
    organizasyon: string,
    sikayet: string,
    doktorAdi: string,
    uygunOrtamSaglandi: boolean 
}