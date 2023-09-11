type Params = {
    slug: string
}

const page = (props: Params) => {
  return (
    <div>My slug: {props.slug}</div>
  )
}

export default page