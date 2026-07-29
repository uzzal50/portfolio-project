export function SectionLabel({ children, index }) {
  return (
    <div className='section-label'>
      <span>{index}</span>
      <span>{children}</span>
      <i />
    </div>
  )
}
