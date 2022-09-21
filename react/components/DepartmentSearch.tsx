import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import QUERY_VALUE  from '../graphql/getDepartmentGroup.graphql'
import styles from "./styles.css"

import DepartmentGroup from './DepartmentGroup'

import { SearchBar } from 'vtex.store-components'

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE)
  const [slug, setSlug] = useState("");

  console.log("Mi slug seleccionado es", slug);
  return loading
  ?
    <div>Loading ...</div>
  :
    <div>
      <h2 className={styles["titleSearch"]}>Busqueda por departamento</h2>
      <div className={styles["searchContainer"]}>
          <DepartmentGroup
            departments={data?.categories[0]?.children}
            handleSetSlug={setSlug}
          />
        <SearchBar
          customSearchPageUrl={slug}
          placeholder="¿Qué buscas hoy?"
          displayMode="search-and-clear-buttons"
        />
      </div>
    </div>
}

export default DepartmentSearch


