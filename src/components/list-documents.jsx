import { useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import fetchFiles from "../state/slices/list-documents";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Lists from "./lists";

const DocumentType = [
  "Certificate",
  "Discharge Summary",
  "Insurance",
  "Living Will",
  "Passport",
  "Prescription",
  "Travel Document",
  "X-ray",
  "Other",
];

const ListDocuments = (props) => {
  const [loading, setLoading] = useState(true);
  const [files, setFiles] = useState(props.data);
  const groupedFiles = files.reduce((group, file) => {
    const { catagory } = file;
    group[catagory] = group[catagory] ?? [];
    group[catagory].push(file);
    return group;
  }, {});

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        DocumentType.map((eachType) => {
          return groupedFiles[eachType] !== undefined ? (
            <Lists
              key={eachType}
              data={groupedFiles[eachType]}
              title={eachType}
            />
          ) : (
            <Lists key={eachType} data={[]} title={eachType} />
          );
        })
      )}
    </>
  );
};

export default ListDocuments;
