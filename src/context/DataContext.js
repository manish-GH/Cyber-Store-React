import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState({});
	const value = {
		userInfo,
		setUserInfo,
	};
	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
