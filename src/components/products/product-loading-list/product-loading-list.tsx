import styled from "styled-components";

import { Skeleton } from "~/components/core";

const S = {
  ProductLoadingList: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 0.5rem;
  `,
};

export function ProductLoadingList() {
  return (
    <S.ProductLoadingList>
      <div>
        <Skeleton skeletons={3} />
      </div>
      <div>
        <Skeleton skeletons={3} />
      </div>
      <div>
        <Skeleton skeletons={3} />
      </div>
      <div>
        <Skeleton skeletons={3} />
      </div>
    </S.ProductLoadingList>
  );
}
