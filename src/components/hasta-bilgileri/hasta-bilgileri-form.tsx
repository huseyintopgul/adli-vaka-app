// UYGULAMA İÇİ İMPORT
import { HastaBilgileri } from '../../model/types';
import { Cinsiyet, KanGrubu, KanGrubuRh } from '../../model/enums';
// UYGULAMA DIŞI İMPORT
import { Formik } from 'formik';
import { Button, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, TextField } from '@mui/material';
import * as yup from 'yup';

const cinsiyetArray = Object.values(Cinsiyet);
const kanGrubuArray = Object.values(KanGrubu);
const kanGrubuRhArray = Object.values(KanGrubuRh);

const hastaBilgileriSchema = yup.object().shape({
    adi: yup.string().min(3, 'Ad alanı 3 karaktarden az olamaz!').required('Ad alanı doldurmak zorunludur!'),
    soyadi: yup.string().max(20, 'Soyad alanı 20 karakterden uzun olamaz!').required('Soyad alanı doldurmak zorunludur!'),
    yas: yup.number().positive('Lütfen pozitif bir sayı giriniz!').integer('Lütfen tam sayı giriniz!').required('Yaş alanı doldurmak zorunludur!'),
    cinsiyet: yup.string().oneOf(cinsiyetArray).required('Cinsiyet alanı doldurmak zorunludur!'),
    kanGrubu: yup.string().oneOf(kanGrubuArray).required('Kan grubu seçmek zorunludur!'),
    kanGrubuRh: yup.string().oneOf(kanGrubuRhArray).required('Kan grubu seçmek zorunludur!')
});

const HastaBilgileriForm = (props: {
    saveHastaBilgileri: any,
    hastaBilgileri: HastaBilgileri,
    darpDurumu: string,
    setDarpDurumu: any
}) => {

    return (
        <Formik
            onSubmit={props.saveHastaBilgileri}
            initialValues={props.hastaBilgileri}
            validationSchema={hastaBilgileriSchema}>
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit
            }) => (
                <form onSubmit={handleSubmit}>
                    <div className='w-[100%] grid gap-5 '>
                        <div className="xs={12} sm={6}">
                            <TextField
                                fullWidth
                                variant='outlined'
                                type='text'
                                label='Adı'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.adi}
                                name='adi'
                                error={!!touched.adi && !!errors.adi}
                                helperText={touched.adi && errors.adi}
                            />
                        </div>
                        <div className="xs={12} sm={6}" >
                            <TextField
                                fullWidth
                                variant='outlined'
                                type='text'
                                label='Soyadı'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.soyadi}
                                name='soyadi'
                                error={!!touched.soyadi && !!errors.soyadi}
                                helperText={touched.soyadi && errors.soyadi}
                            />
                        </div>
                        <div className="xs={12} sm={6}">
                            <TextField
                                fullWidth
                                variant='outlined'
                                type='number'
                                label='Yaş'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.yas ? values.yas : ''}
                                name='yas'
                                error={!!touched.yas && !!errors.yas}
                                helperText={touched.yas && errors.yas}
                            />
                        </div>
                        <div className="xs={12} sm={6}">
                            <TextField
                                fullWidth
                                type='text'
                                select
                                label='Cinsiyet'
                                name='cinsiyet'
                                value={values.cinsiyet ? values.cinsiyet : ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant='outlined'
                                error={!!touched.cinsiyet && !!errors.cinsiyet}
                                helperText={touched.cinsiyet && errors.cinsiyet}
                            >
                                {
                                    cinsiyetArray.map((cinsiyet, index) => (
                                        <MenuItem key={index} value={cinsiyetArray[index]}>
                                            {
                                                cinsiyetArray[index]
                                            }
                                        </MenuItem>
                                    ))
                                }
                            </TextField>
                        </div>
                        <div className='flex gap-2'>
                            <TextField
                                fullWidth
                                select
                                type='text'
                                variant='outlined'
                                label='Kan Grubu'
                                name='kanGrubu'
                                value={values.kanGrubu ? values.kanGrubu : ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!touched.kanGrubu && !!errors.kanGrubu}
                                helperText={touched.kanGrubu && errors.kanGrubu}
                            >
                                {
                                    kanGrubuArray.map((kanGrubu, index) => (
                                        <MenuItem key={index} value={kanGrubuArray[index]}>
                                            {
                                                kanGrubuArray[index]
                                            }
                                        </MenuItem>
                                    ))
                                }
                            </TextField>
                            <TextField
                                fullWidth
                                select
                                type='text'
                                variant='outlined'
                                label='RH'
                                name='kanGrubuRh'
                                value={values.kanGrubuRh ? values.kanGrubuRh : ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!touched.kanGrubuRh && !!errors.kanGrubuRh}
                                helperText={touched.kanGrubuRh && errors.kanGrubuRh}
                            >
                                {
                                    kanGrubuRhArray.map((kanGrubuRh, index) => (
                                        <MenuItem key={index} value={kanGrubuRhArray[index]}>
                                            {
                                                kanGrubuRhArray[index]
                                            }
                                        </MenuItem>
                                    ))
                                }
                            </TextField>
                        </div>
                        <div className=' flex justify-center text-center'>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Darp Durumu</FormLabel>
                                <RadioGroup
                                    value={props.darpDurumu}
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value={'true'} control={<Radio onClick={(e) => props.setDarpDurumu('true')} />} label="Evet" />
                                    <FormControlLabel value={'false'} control={<Radio onClick={(e) => props.setDarpDurumu('false')} />} label="Hayır" />
                                </RadioGroup>
                            </FormControl>
                        </div>

                    </div>
                    <div className='flex justify-end mt-5'>
                        <Button
                            type='submit'
                            color='secondary'
                            variant='contained'
                            disabled={props.darpDurumu === ''}
                        >
                            Devam
                        </Button>
                    </div>
                </form >
            )
            }
        </Formik >
    )
}

export default HastaBilgileriForm