package com.bingo.test;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by 赵 on 2017/7/5.
 */
public class test {

    public static void main(String[] args){
        System.out.println("hello world");
        List<String> list = new ArrayList<String>();
        list.add("nihao");
        list.add("heihei");
        for (String s : list
             ) {
            System.out.println(s);
        }
    }
}
