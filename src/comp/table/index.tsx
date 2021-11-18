import React, {Component} from "react";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";

export default class SimpleTable extends Component<any, any>{
    // 생성자
    constructor(props:{info: {columns:any[], elements:any[]}}) {
        super(props);

        this.state = {
            info:props.info
        }
    }

    // 헤더 생성
    getTableHead() {
        return (
            <TableHead>
                <TableRow>
                    {this.state.info.columns.map((column:any, col:number) => (
                        <TableCell key={col}>{column.name}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
        );
    }

    // 바디 생성
    getTableBody() {
        return (
            <TableBody>
                {this.state.info.elements.map((element:any, row:number) => (
                    <TableRow key={row}>
                        {this.state.info.columns.map((column:columnType, col:number) => {
                            return <TableCell key={col}>{element[column.id]}</TableCell>
                        })}
                    </TableRow>
                ))}
            </TableBody>
        );
    }

    // 렌더
    render() {
        return (
            <>
                <Table>
                    {this.getTableHead()}
                    {this.getTableBody()}
                </Table>
            </>
        );
    }
}

// 컬럼 타입 선언
type columnType = {
    id:string,
    name:string
}


