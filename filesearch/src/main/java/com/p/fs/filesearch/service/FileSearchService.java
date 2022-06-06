package com.p.fs.filesearch.service;

import com.p.fs.filesearch.exception.InvalidInputSuppliedException;
import com.p.fs.filesearch.pojo.FileSearchData;
import com.p.fs.filesearch.util.Constants;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileFilter;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@Service
public class FileSearchService {

    public List<FileSearchData> startSearch(String fileName, List<String> extList) throws InvalidInputSuppliedException {
        if (fileName == null || fileName.trim().equals("")) {
            throw new InvalidInputSuppliedException(String.format(Constants.INVALID_VALUE_PROVIDED, fileName, Constants.PARAMETER_FILENAME));
        }
        if (!Files.exists(Paths.get(fileName))) {
            throw new InvalidInputSuppliedException(String.format(Constants.FILE_NOT_FOUND, fileName));
        }
        if (extList == null || extList.isEmpty()) {
            throw new InvalidInputSuppliedException(String.format(Constants.INVALID_VALUE_PROVIDED, extList, Constants.PARAMETER_EXTENSION));
        }

        List<FileSearchData> fileList;
        //StringBuilder sb = new StringBuilder();
        fileList = new ArrayList<>();
        search(fileList, fileName, extList);

        //System.out.println(fileName+"  "+fileList);
//        for (int i = 0; i < fileList.size(); i++) {
//            if (i == 0) {
//                sb.append("[");
//            }
//
//            sb.append(fileList.get(i));
//
//            if (i == fileList.size() - 1) {
//                sb.append("]");
//            } else {
//                sb.append(" , \n");
//            }
//        }

        return fileList;
    }

    private void search(List<FileSearchData> fileList, String fileName, List<String> extensionList) {

        File f = new File(fileName);
        File[] children = f.listFiles(new MyFileFilter(extensionList));
        if (children != null && children.length > 0) {
            for (File child : children) {
                if (child.isDirectory()) {
                    search(fileList, child.getAbsolutePath(), extensionList);
                }
                if (child.isFile()) {

//                    fileList.add("{\"name\":\"" + child.getName()
//                            + "\" , \"filePath\":\""
//                            + child.getAbsolutePath().trim().replace("\\", "/")
//                            + "\" , \"parentFile\":\""
//                            + fileName.trim().replace("\\", "/")
//                            + "\"}");

                    fileList.add(new FileSearchData(child.getName(),
                            child.getAbsolutePath().trim().replace("\\", "/"),
                            fileName.trim().replace("\\", "/")));


                }
            }
        }


    }

    private static class MyFileFilter implements FileFilter {

        List<String> allowedExtension;

        public MyFileFilter(List<String> allowedExtension) {
            this.allowedExtension = allowedExtension;
        }

        @Override
        public boolean accept(File file) {

            if (file == null) {
                return false;
            }
            if (!file.exists()) {
                return false;
            }
            if (file.isDirectory()) {
                return true;
            }


            String fileName = file.getName()
                    .trim().toLowerCase();

            for (String ext : allowedExtension) {

                if (fileName.endsWith(ext)) {
                    return true;
                }
            }


            return false;
        }

    }

}
