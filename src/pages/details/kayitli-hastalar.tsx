// UYGULAMA İÇİ İMPORT
import { useEffect } from 'react';
import OrganizasyonChart from '../../components/org-chart/organizasyon-chart';
import Header from "../../common/header";
import Navigator from "../../common/navigator";
import HastaTablo from '../../components/hasta-tablo/hasta-tablo';
// UYGULAMA DIŞI İMPORT
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/store";
import { loadRecords } from "../../redux/hasta-action";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const HastaKayitlari = () => {
    const { hastalar } = useSelector((rootState: RootReducer) => rootState.hastaKayitlari);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(loadRecords())
    }, []);

    return (
        <div className=' sm:w-[70%] flex p-3 sm:px-12 mx-auto flex-col items-center mt-[3%] border shadow-md'>
            <div className='m-5 w-full'>
                <Navigator to="/yeni-hasta-kayit" text="Yeni Hasta Kayıt"
                    icon={<AddCircleOutlineOutlinedIcon sx={{ mr: "10px" }} />} />
                <Header title="Hasta Kayıtlari" subtitle="Hasta kayıtları listesi" />
                <HastaTablo hastalar={hastalar} />
                <OrganizasyonChart hastalar={hastalar} />
            </div>
        </div>
    );
};
export default HastaKayitlari;