import React from 'react';
import RaportChart from "../../organisms/charts/raport/RaportChart";
import RaportTable from "../../organisms/raportTable/RaportTable";
import '../../organisms/raportTable/RaportTable.css';

class Raport extends React.Component {
    render() {
        return (
            <div className="raport">
                <RaportChart />
                <div className="raportTableWrap">
                    <RaportTable />
                </div>
            </div>
        )
    }
}

export default Raport;