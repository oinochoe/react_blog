import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

/**
 * 회원가입 / 로그인 페이지의 레이아웃을 담당하는 컴포넌트
 */

/* 화면 전체를 채움 */
const AuthTemplateBlock = styled.div`
    /* flex로 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: ${palette.gray[2]};
`;

/* 흰색 박스 */
const WhiteBox = styled.div`
    .logo-area {
        display: block;
        padding-bottom: 2rem;
        font-weight: bold;
        letter-spacing: 2px;
        text-align: center;
    }
    width: 360px;
    padding: 2rem;
    border-radius: 2px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
    background: white;
`;

const AuthTemplate = ({ children }) => {
    return (
        <AuthTemplateBlock>
            <WhiteBox>
                <div className="logo-area">
                    <Link to="/">REACTERS</Link>
                </div>
                {children}
            </WhiteBox>
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;
