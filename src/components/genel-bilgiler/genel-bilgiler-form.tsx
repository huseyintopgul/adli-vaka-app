// UYGULAMA İÇİ İMPORT
import { GelisNedeni, OdadaBulunanlar } from '../../model/enums';
import { GenelBilgiler } from '../../model/types';
// UYGULAMA DIŞI İMPORT
import { Formik } from 'formik';
import { Button, FormControl, FormControlLabel, FormHelperText, InputLabel, ListItemText, MenuItem, Select, TextField } from '@mui/material';
import * as yup from 'yup';
import Switch from '@mui/material/Switch';

const gelisNedeniArray = Object.values(GelisNedeni);
const odadaBulunanlarArray = Object.values(OdadaBulunanlar);


const requiredMsg = 'Boş bırakılamaz!';
const lengthMsg = 'En az 25 karakter uzunluğunda olmalıdır!'

const genelBilgilerSchema = yup.object().shape({
    gelisNedeni: yup
        .string()
        .oneOf(gelisNedeniArray)
        .required(requiredMsg),
    odadaBulunanlar: yup
        .array()
        .min(1, requiredMsg),
    gelisNedeniAciklama: yup
        .string()
        .min(25, lengthMsg)
        .required(requiredMsg),
    organizasyon: yup
        .string().
        required(requiredMsg),
    sikayet: yup
        .string()
        .min(25, lengthMsg)
        .required(requiredMsg),
    doktorAdi: yup
        .string()
        .required(requiredMsg),
    uygunOrtamSaglandi: yup
        .boolean()
        .required(requiredMsg)
});
const varsayilanGenelBilgiler: GenelBilgiler = {
    gelisNedeni: null,
    gelisNedeniAciklama: '',
    odadaBulunanlar: [],
    darpDurumu: false,
    organizasyon: '',
    sikayet: '',
    doktorAdi: '',
    uygunOrtamSaglandi: false
}

const GenelBilgilerForm = (props: { saveGenelBilgiler: any, prevForm: any, activeForm: number }) => {

    return (
        <Formik
            onSubmit={props.saveGenelBilgiler}
            initialValues={varsayilanGenelBilgiler}
            validationSchema={genelBilgilerSchema}
        >
            {(
                { values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit }
            ) => (
                <form onSubmit={handleSubmit}>
                    <div className=' w-[100%] grid gap-5'>
                        <div className="xs={12} sm={6}">
                            <TextField
                                fullWidth
                                select
                                type='text'
                                name='gelisNedeni'
                                label='Geliş Nedeni'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant='outlined'
                                value={values.gelisNedeni ? values.gelisNedeni : ''}
                                error={!!touched.gelisNedeni && !!errors.gelisNedeni}
                                helperText={touched.gelisNedeni && errors.gelisNedeni}
                            >
                                {
                                    gelisNedeniArray.map((gelisNedeni, index) => (
                                        <MenuItem key={index} value={gelisNedeniArray[index]}>
                                            {
                                                gelisNedeniArray[index]
                                            }
                                        </MenuItem>
                                    ))
                                }
                            </TextField>
                        </div>
                        <div className="xs={12} sm={6}">
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                variant='outlined'
                                type='text'
                                label='Şikayet'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.sikayet ? values.sikayet : ''}
                                name='sikayet'
                                error={!!touched.sikayet && !!errors.sikayet}
                                helperText={touched.sikayet && errors.sikayet}
                            />
                        </div>
                        <div className="xs={12} sm={6}">
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                variant='outlined'
                                type='text'
                                label='Geliş Nedeni Açıklama'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.gelisNedeniAciklama ? values.gelisNedeniAciklama : ''}
                                name='gelisNedeniAciklama'
                                error={!!touched.gelisNedeniAciklama && !!errors.gelisNedeniAciklama}
                                helperText={touched.gelisNedeniAciklama && errors.gelisNedeniAciklama}
                            />
                        </div>
                        <div className="xs={12} sm={6}">
                            <FormControl className='w-full'
                                error={!!touched.odadaBulunanlar && !!errors.odadaBulunanlar}
                            >
                                <InputLabel>Odada Bulunanlar</InputLabel>
                                <Select
                                    fullWidth
                                    label='Odada Bulunanlar'
                                    id="encargadoP"
                                    multiple
                                    name='odadaBulunanlar'
                                    value={values.odadaBulunanlar}
                                    onChange={handleChange}
                                    renderValue={(selected) => selected.join(", ")}
                                >
                                    {
                                        odadaBulunanlarArray.map((name, index) => (
                                            <MenuItem key={index} value={name}>
                                                <ListItemText primary={name} />
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                                <FormHelperText>{touched.odadaBulunanlar && errors.odadaBulunanlar}</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="xs={12} sm={6}">
                            <TextField
                                fullWidth
                                variant='outlined'
                                type='text'
                                label='Organizasyon'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.organizasyon ? values.organizasyon : ''}
                                name='organizasyon'
                                error={!!touched.organizasyon && !!errors.organizasyon}
                                helperText={touched.organizasyon && errors.organizasyon}
                            />
                        </div>
                        <div className="xs={12} sm={6}">
                            <TextField
                                fullWidth
                                variant='outlined'
                                type='text'
                                label='Doktor Adı'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.doktorAdi ? values.doktorAdi : ''}
                                name='doktorAdi'
                                error={!!touched.doktorAdi && !!errors.doktorAdi}
                                helperText={touched.doktorAdi && errors.doktorAdi}
                            />
                        </div>
                        <div>
                            <FormControlLabel label='Uygun Ortam Sağlandı'
                                control={<Switch value={values.uygunOrtamSaglandi}
                                    onClick={() => values.uygunOrtamSaglandi = !values.uygunOrtamSaglandi} />}
                            />
                        </div>
                    </div>
                    <div className='flex justify-between mt-5'>
                        <Button
                            onClick={props.prevForm} color='info' variant='contained'
                        >
                            Geri
                        </Button>
                        <Button
                            type='submit' color='secondary' variant='contained'
                        >
                            Kaydet
                        </Button>
                    </div>
                </form>
            )
            }
        </Formik >
    )
}
export default GenelBilgilerForm;
