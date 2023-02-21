import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography,
} from "@mui/material";
import CommonTable from 'components/table/CommonTable';
import CommonTableColumn from 'components/table/CommonTableColumn';
import CommonTableRow from 'components/table/CommonTableRow';
import VocHeader from '../../components/voc/VocHeader'; 
import { API } from "../../config";


function Voc() {
  //const item = GetData();
  const [allData, setAllData] = React.useState({});
  useEffect(() => {
    axios
      .get(`${API.Board}`)
      .then(function (response) {
        setAllData(response.data);
        console.log(allData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const data = allData ?? [];

  return (
  
    
    <div>
      <TableContainer component={Paper}>
      <Link to="/board/question">
          <button
          >게시글 작성</button>
        </Link>
        <form onSubmit>
          </form>
        <Table
          sx={{
            backgroundColor: "black"
          }}
          aria-label="simple table"
        >
          <TableHead
            sx={{
              borderTop: "1px solid white",
              borderBottom: "1px solid white",
            }}
          > 
            <TableRow>
              <TableCell
                sx={{
                  color: "white",
                  textAlign: "center",
                  width: "20rem",
                  fontSize: "2.5rem",
                  fontWeight: "340",
                }}
              >
                글번호
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "white",
                  textAlign: "center",
                  width: "20rem",
                  fontSize: "2.5rem",
                  fontWeight: "340",
                }}
              >
                작성자
              </TableCell>
              
              <TableCell
                align="right"
                sx={{
                  color: "white",
                  textAlign: "center",
                  width: "20rem",
                  fontSize: "2.5rem",
                  fontWeight: "340",
                }}
              >
                내용
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "white",
                  textAlign: "center",
                  width: "20rem",
                  fontSize: "2.5rem",
                  fontWeight: "340",
                }}
              >
                작성시간
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "white",
                  textAlign: "center",
                  width: "20rem",
                  fontSize: "2.5rem",
                  fontWeight: "340",
                }}
              >
                수정시간
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 &&
              data.map((info) => (
                <TableRow key={info.contentId}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      color: "white",
                      fontSize: "2rem",
                      textAlign: "center",
                      fontWeight: "400",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      "&:hover,&.Mui-focusVisible": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    <div>{info.contentId}</div>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: "white",
                      fontSize: "2rem",
                      textAlign: "center",
                      fontWeight: "400",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {info.writerId}
                  
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: "white",
                      fontSize: "2rem",
                      textAlign: "center",
                      fontWeight: "400",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  ><Link to={`/board/${info.contentId}`}>
                    {info.content}
                     </Link>
                  
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: "white",
                      paddingLeft: 8,
                      paddingRight: 7,
                      maxWidth: "10rem",
                      fontSize: "2rem",
                      textAlign: "center",
                      fontWeight: "400",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {info.writeDate}
                  
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: "white",
                      fontSize: "2rem",
                      textAlign: "center",
                      fontWeight: "400",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {info.updateDate}
                  </TableCell>
                  
                </TableRow>
                
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
  
export default Voc;