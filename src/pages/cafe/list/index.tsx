import React, {Component} from "react";
import SimpleTable from "../../../comp/table";

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
                name:"바나프레소",
                distance:3,
                taste:3,
                price:4,
                amount:4,
                total:"가격이 전체적으로 싸고 싼만큼 값어치는함. 딱 그 정도",
                desc:"자리가 넓지않아서 가끔 자리 없음."
            },
            {
                name:"투썸플레이스 선릉로점",
                distance:3,
                taste:4,
                price:2,
                amount:3,
                total:"거리가 좀 있고 가격도 꽤 나감 그런데 홀이 넓음"
            },
            {
                name:"백다방",
                distance:2,
                taste:3,
                price:4,
                amount:5,
                total:"맛은 평범한데 양이 많음.",
                desc:"분틀가면 가는듯"
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

