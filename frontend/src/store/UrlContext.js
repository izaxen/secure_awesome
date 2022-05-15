import React, { useState, useContext } from "react";
const UrlIdContext = React.createContext({
  groupId: {},
  setGroupId: () => { }
})

export const useUrlId = () => useContext(UrlIdContext);

export const UrlContextProvider = (props) => {
  const [groupId, setGroupId] = useState(null)

  const setUrlIdHandler = (data) => {
    setGroupId(data);
  }

  return (
    <UrlIdContext.Provider
      value={{
        groupId: groupId,
        setGroupId: setUrlIdHandler,
      }}>
      {props.children}

    </UrlIdContext.Provider>
  )
}

export default UrlIdContext;