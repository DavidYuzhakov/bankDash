import ContentLoader from "react-content-loader"

export function TransSkelton () {
  return (
    <ContentLoader 
      speed={2}
      width={301}
      height={55}
      viewBox="0 0 301 55"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="27" cy="28" r="27" /> 
      <rect x="68" y="7" rx="5" ry="5" width="234" height="40" />
    </ContentLoader>
  )
}