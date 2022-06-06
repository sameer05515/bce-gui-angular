package com.p.fs.filesearch.controller;

import com.p.fs.filesearch.exception.InvalidInputSuppliedException;
import com.p.fs.filesearch.pojo.FileSearchData;
import com.p.fs.filesearch.pojo.FileSearchRequestData;
import com.p.fs.filesearch.response.ResponseHandler;
import com.p.fs.filesearch.service.FileSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin
public class FileSearchController {

    @Autowired
    FileSearchService fileSearchService;
    @GetMapping(value = "/product")
    public String home(){
        return "hello";
    }

    @PostMapping(value = "/file-search",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> home(@RequestBody FileSearchRequestData data){
        try {
            System.out.println(data);
            List<FileSearchData> response=fileSearchService.startSearch(data.getFileName(), Arrays.asList(data.getExtentions()));
            return ResponseHandler.generateResponse(HttpStatus.OK,false,"success",response);
        }catch (InvalidInputSuppliedException e){
            e.printStackTrace();
            return ResponseHandler.generateResponse(HttpStatus.PRECONDITION_FAILED, true, "Fail",
                    e.getMessage());
        }catch (Exception e){
            e.printStackTrace();
            return ResponseHandler.generateResponse(HttpStatus.INTERNAL_SERVER_ERROR, true, "Fail",
                    e.getMessage());
        }
    }
}
