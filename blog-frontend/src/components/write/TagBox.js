import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const TagBoxBlock = styled.div`
    width: 100%;
    padding-top: 2rem;
    border-top: 1px solid ${palette.gray[2]};

    h4 {
        margin-top: 0;
        margin-bottom: 0.5rem;
        color: ${palette.gray[8]};
    }
`;

const TagForm = styled.form`
    display: flex;
    width: 256px;
    border: 1px solid ${palette.gray[9]}; /* 스타일 초기화 */
    border-radius: 4px;
    overflow: hidden;
    input,
    button {
        outline: none;
        border: none;
        font-size: 1rem;
    }

    input {
        flex: 1;
        padding: 0.5rem;
    }
    button {
        padding-right: 1rem;
        padding-left: 1rem;
        border: none;
        background: ${palette.gray[8]};
        color: white;
        font-weight: bold;
        cursor: pointer;
        &:hover {
            background: ${palette.gray[6]};
        }
    }
`;

const Tag = styled.div`
    margin-right: 0.5rem;
    color: ${palette.gray[6]};
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
`;

const TagListBlock = styled.div`
    display: flex;
    margin-top: 0.5rem;
`;

// React.memo를 사용하여 tag 값이 바뀔 때만 리렌더링되도록 처리
const TagItem = React.memo(({ tag, onRemove }) => (
    <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

// React.memo를 사용하여 tags 값이 바뀔 때만 리렌더링되도록 처리
const TagList = React.memo(({ tags, onRemove }) => (
    <TagListBlock>
        {tags.map((tag) => (
            <TagItem key={tag} tag={tag} onRemove={onRemove} />
        ))}
    </TagListBlock>
));

const TagBox = () => {
    const [input, setInput] = useState('');
    const [localTags, setLocalTags] = useState([]);

    const insertTag = useCallback(
        (tag) => {
            if (!tag) return; // 공백이라면 추가 x
            if (localTags.includes(tag)) return; // 이미 존재하는 태그 x
            setLocalTags([...localTags, tag]);
        },
        [localTags],
    );

    const onRemove = useCallback(
        (tag) => {
            setLocalTags(localTags.filter((t) => t !== tag));
        },
        [localTags],
    );

    const onChange = useCallback((e) => {
        setInput(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            insertTag(input.trim()); // 앞뒤 공백을 없앤 후 등록
            setInput(''); // input 초기화
        },
        [input, insertTag],
    );

    return (
        <TagBoxBlock>
            <h4>태그</h4>
            <TagForm onsubmit={onSubmit}>
                <input
                    placeholder="태그를 입력하세요"
                    value={input}
                    onChange={onChange}
                />
                <button type="submit">추가</button>
            </TagForm>
            <TagList tags={localTags} onRemove={onRemove} />
        </TagBoxBlock>
    );
};

export default TagBox;
