package com.p.fs.filesearch.pojo;

import java.util.Arrays;

public class FileSearchRequestData {
    private String fileName;
    private String[] extentions;

    public FileSearchRequestData() {
    }

    @Override
    public String toString() {
        return "FileSearchData{" +
                "fileName='" + fileName + '\'' +
                ", extentions=" + Arrays.toString(extentions) +
                '}';
    }

    public FileSearchRequestData(String fileName, String[] extentions) {
        this.fileName = fileName;
        this.extentions = extentions;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String[] getExtentions() {
        return extentions;
    }

    public void setExtentions(String[] extentions) {
        this.extentions = extentions;
    }
}
