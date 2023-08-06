// UYGULAMA İÇİ İMPORT
import React, { useState } from 'react'
import { GenelBilgiler, Hasta, HastaBilgileri } from '../../model/types';
import Header from '../../common/header';
import { success } from '../../common/toast';
import { newRecord } from '../../redux/hasta-action';
import HastaBilgileriForm from '../../components/hasta-bilgileri/hasta-bilgileri-form';
import Navigator from '../../common/navigator';
import GenelBilgilerForm from '../../components/genel-bilgiler/genel-bilgiler-form';
// UYGULAMA DIŞI İMPORT
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';



const varsayilanHastaBilgileri: HastaBilgileri = {
    adi: '',
    soyadi: '',
    yas: null,
    cinsiyet: null,
    kanGrubu: null,
    kanGrubuRh: null
}

const YeniHastaKayit = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [hastaBilgileri, setHastaBilgileri] = useState(varsayilanHastaBilgileri);
    const [activeForm, setActiveForm] = useState(0);
    const [darpDurumu, setDarpDurumu] = useState('');

    const saveHastaBilgileri = (hastaBilgileri: HastaBilgileri, genelBilgiler: GenelBilgiler) => {
        setHastaBilgileri(hastaBilgileri);
        setActiveForm(1);
    };

    const saveGenelBilgiler = (genelBilgiler: GenelBilgiler) => {
        genelBilgiler.darpDurumu = darpDurumu === 'true'
        console.log(genelBilgiler.darpDurumu)
        const hasta: Hasta = {
            id: uuid(),
            hastaBilgileri: hastaBilgileri,
            genelBilgiler: genelBilgiler
        }
        dispatch(newRecord(hasta));
        success('Hasta kaydı oluşturulsu');
        navigate('/');
    }
    const prevForm = () => {
        setActiveForm(0)
    }
    return (
        <div className='sm:w-[70%] flex p-3 sm:px-12 mx-auto flex-col items-center mt-[3%]  border shadow-md'>
            <div className='m-5 w-full'>
                <Navigator to='/' text="Ana Sayfa" icon={<HomeOutlinedIcon sx={{ mr: "10px" }} />} />
                <Header title='Hasta Kayıt Formu' subtitle='Hasta kayıt bilgileri ve genel bilgiler ekranı' />
                {
                    activeForm === 0 &&
                    <HastaBilgileriForm
                        saveHastaBilgileri={saveHastaBilgileri}
                        hastaBilgileri={hastaBilgileri}
                        darpDurumu={darpDurumu}
                        setDarpDurumu={setDarpDurumu}
                    />
                }
                {
                    activeForm === 1 &&
                    <GenelBilgilerForm
                        saveGenelBilgiler={saveGenelBilgiler}
                        prevForm={prevForm}
                        activeForm={activeForm}
                    />
                }

            </div>
        </div>
    )
}

export default YeniHastaKayit;