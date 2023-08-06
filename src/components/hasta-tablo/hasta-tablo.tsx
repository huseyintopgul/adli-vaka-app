import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Hasta } from '../../redux/hasta-action';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../redux/store';
import { Cinsiyet } from '../../model/enums';

const columns: GridColDef[] = [

    {
        field: 'adi',
        headerName: 'Adı',
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.hastaBilgileri.adi || ''}`,
    },
    {
        field: 'soyadi',
        headerName: 'Soyadı',
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.hastaBilgileri.soyadi || ''}`
    },
    {
        field: 'yas',
        headerName: 'Yaş',
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.hastaBilgileri.yas || ''}`
    },
    {
        field: 'cinsiyet',
        headerName: 'Cinsiyet',
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.hastaBilgileri.cinsiyet || ''}`
    },
    {
        field: 'kanGrubu',
        headerName: 'Kan Grubu',
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.hastaBilgileri.kanGrubu} ${params.row.hastaBilgileri.kanGrubuRh}`
    },
    {
        field: 'gelisNedeni',
        headerName: 'Geliş Nedeni',
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.genelBilgiler.gelisNedeni || ''}`
    },
    {
        field: 'darpDurumu',
        headerName: 'Darp Durumu',
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            params.row.genelBilgiler.darpDurumu ? 'Var' : 'Yok'
    },
    {
        field: 'sikayet',
        headerName: 'Şikayet',
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.genelBilgiler.sikayet || ''}`
    },

    {
        field: 'odadaBulunanlar',
        headerName: 'Odada Bulunanlar',
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.genelBilgiler.odadaBulunanlar || ''}`
    },
    {
        field: 'doktorAdi',
        headerName: 'Doktor Adı',
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.genelBilgiler.doktorAdi || ''}`
    },

    {
        field: 'uygunOrtamSaglandi',
        headerName: 'Uygun Ortam Sağlandı',
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            params.row.genelBilgiler.uygunOrtam ? 'Sağlandı' : 'Sağlanmadı'
    },
    {
        field: 'organizasyon',
        headerName: 'Organizasyon',
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.genelBilgiler.organizasyon || ''}`
    },
    {
        field: 'gelisNedeniAciklama',
        headerName: 'Geliş Nedeni',
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.genelBilgiler.gelisNedeniAciklama || ''}`
    },
];


const rows = [
    {
        id: '',
        adi: '',
        soyadi: '',
        yas: null,
        cinsiyet: Cinsiyet,
        kanGrubu: '',
        kanGrubuRh: '',
        gelisNedeni: null,
        gelisNedeniAciklama: '',
        odadaBulunanlar: [],
        darpDurumu: true,
        organizasyon: '',
        sikayet: '',
        doktorAdi: '',
        uygunOrtamSaglandi: false

    },

];

export default function HastaTablo(props: { hastalar: Hasta[] }) {
    const { hastalar } = useSelector((rootState: RootReducer) => rootState.hastaKayitlari);
    return (
        <div className='h-[300px] w-full'>
            <DataGrid
                rows={hastalar}
                columns={columns}
                getRowHeight={() => 'auto'}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10, 20]}
            />
        </div>
    );
}