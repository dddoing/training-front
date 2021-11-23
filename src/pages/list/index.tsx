import React, {Component} from "react";
import SimpleTable from "../../comp/table";

export default class ListPage extends Component<any, any>{
    // 컬럼 생성
    createColumn(id:string, name:string) {
        return {id:id, name:name};
    }

    // 렌더
    render() {
        const columns = [
            this.createColumn("name", "상호명"),
            this.createColumn("distance", "거리"),
            this.createColumn("taste", "맛"),
            this.createColumn("price", "가격"),
            this.createColumn("amount", "금액"),
            this.createColumn("total", "총평"),
            this.createColumn("desc", "상세설명")
        ];
        const elements = [
            {
                name:"부대감자탕",
                distance:5,
                taste:4,
                price:3,
                amount:5,
                total:"거리가 가깝고 음식맛은 괜찮음. 양이 조금 많고 가격이 다소 비쌈. 가끔 가기에는 나쁘지 않음 2주에 1번?",
                desc:"쌀쌀한 날씨에 가면 사람이 꽉참"
            },
            {
                name:"천룡(중국집)",
                distance:5,
                taste:3,
                price:2,
                amount:3,
                total:"거리가 가깝고 음식맛, 양은 평범. 가격이 다소 비쌈. 한달에 1번 가는것도 생각해볼정도"
            },
            {
                name:"안동국시",
                distance:3,
                taste:5,
                price:0,
                amount:4,
                total:"거리가 조금 멀고 가격이 엄청 비쌈. 맛은 있고 양도 꽤 많음.",
                desc:"요리가 나오는시간이 오래 걸림"
            }
        ];
        const info = {
            columns:columns,
            elements:elements
        }

        return (
            <>
                <div>
                    <SimpleTable info={info}/>
                </div>
            </>
        );
    }
}

