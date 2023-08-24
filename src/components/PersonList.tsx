type PersonListProps = {
    names: {
        firstname: string;
        lastname: string;
    }[]
}

export const PersonList = (props: PersonListProps) => {
  return(
      <div>
          {
              props.names.map(name => {
                  return (
                      <h2 key={name.firstname}>
                          {name.firstname} {name.lastname}
                      </h2>
                  )
              })
          }
      </div>
  )
}