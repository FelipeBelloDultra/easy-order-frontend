import * as S from "./styles";

type SkeletonProps = {
  skeletons?: number;
};

export function Skeleton({ skeletons = 1 }: SkeletonProps) {
  return (
    <S.SkeletonContainer>
      {Array.from({ length: skeletons }).map((_, i) => (
        <span key={`${i}-skeleton`} />
      ))}
    </S.SkeletonContainer>
  );
}
