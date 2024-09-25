import ContentLoader from 'react-content-loader'

export function CardSkeleton () {
  return (
    <ContentLoader 
      speed={2}
      width={350}
      height={240}
      viewBox="0 0 350 240"
      backgroundColor="#fff"
      foregroundColor="#F5F7FA"
    >
      <rect x="0" y="0" rx="24" ry="24" width="350" height="160" /> 
      <rect x="0" y="170" rx="25" ry="25" width="350" height="70" />
    </ContentLoader>
  )
}