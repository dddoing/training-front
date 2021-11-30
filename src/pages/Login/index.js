import React from 'react'
import '../../../public/common.css';
import {Button} from "@material-ui/core";

// TODO 임시 로그인 데이터 설정
const temp = [
    {
      "id": "admin",
      "pw": "admin",
      "role": "admin"
    },
    {
      "id": "guest",
      "pw": "guest",
      "role": "guest"
    }
    ];

export default class Login extends React.Component {
    //
    componentDidMount() {
    }

    //
    render() {
        const onSubmit = (e) => {
            // 기존 이벤트 off
            e.preventDefault();

            // 폼 데이터 추출
            const formData = new FormData(e.target);
            const formProp = Object.fromEntries(formData);
            const id = formProp.id;
            const pw = formProp.pw;

            // 아이디 체크
            if(temp.filter(json => json.id === id && json.pw === pw).length === 1) {
                //
                alert("로그인 되었습니다.");

                // 세션에 로그인 정보 설정
                sessionStorage.setItem("loginInfo", JSON.stringify({id:id, pw:pw}));

                // 화면 전환
                this.props.history.push("/main");
            } else {
                //
                alert("계정 정보를 확인해주세요.");
            }
        };

        //
        return (
            <>
                <div className={"login_content"}>
                    <div className={"login_wrap"}>
                        <form id={"loginForm"} onSubmit={onSubmit}>
                            <div className={"login_panel"}>
                                <div className={"div_input"}>
                                    <div className={"div_id lpad_30"}>
                                        <input id="id" name="id" className={"input_100"} type={"text"} placeholder={"아이디"}/>
                                    </div>
                                    <div className={"div_pw lpad_30"}>
                                        <input id="pw" name="pw" className={"input_100"} type={"password"} placeholder={"비밀번호"}/>
                                    </div>
                                </div>
                                <div className={"div_button"}>
                                    <Button type={"submit"}>로그인</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

// export default withRouter(Login);