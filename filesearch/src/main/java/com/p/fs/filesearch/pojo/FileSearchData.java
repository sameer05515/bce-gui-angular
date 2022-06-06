package com.p.fs.filesearch.pojo;

public class FileSearchData {
    private String name;
    private String filePath;
    private String parentFile;
    public String getFilePath() {
        return filePath;
    }
    public String getParentFile() {
        return parentFile;
    }
    public String getName() {
        return name;
    }
    public FileSearchData(String name, String filePath, String parentFile) {
        this.name = name;
        this.filePath = filePath;
        this.parentFile = parentFile;
    }
}
