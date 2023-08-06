import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { Hasta } from '../../redux/hasta-action';

export const options = {
    title: 'Organizasyona Göre Adli Rapor Grafiği',
    is3D: true,
};
const OrganizasyonChart = (props: { hastalar: Hasta[] }) => {
    const [rapor, setRapor] = useState({})

    useEffect(() => {
        const organizasyonRaporu = [];
        let map = new Map<String, number>();
        for (let i = props.hastalar.length - 1; i >= 0; i--) {
            const organizasyon = props.hastalar[i].genelBilgiler.organizasyon;
            let getOrganizasyon = map.get(organizasyon);
            if (!getOrganizasyon) {
                map.set(organizasyon, 1)
            } else {
                map.set(organizasyon, ++getOrganizasyon)
            }
        }
        map.forEach((value, key) => {
            const newArray = [key, value];
            organizasyonRaporu.push(newArray);
        });
        organizasyonRaporu.unshift(['Organizasyon Adı', 'Rapor Sayısı']);
        setRapor(organizasyonRaporu)

    }, [props.hastalar])
    return (
        <Chart
            chartType='PieChart'
            data={rapor}
            options={options}
            height={'auto'}
            width={'100%'}
        />
    )
}

export default OrganizasyonChart