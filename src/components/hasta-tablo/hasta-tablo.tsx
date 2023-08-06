import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../redux/store';
import { Hasta } from '../../model/types';

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
            params.row.genelBilgiler.uygunOrtamSaglandi ? 'Sağlanmadı' : 'Sağlandı',
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

export default function HastaTablo(props: { hastalar: Hasta[] }) {
    const { hastalar } = useSelector((rootState: RootReducer) => rootState.hastaKayitlari);
    return (
        <div className='min-h-[100px] w-full'>
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