package com.example.demo.payload.responses;

import graphql.annotations.annotationTypes.GraphQLField;
import graphql.annotations.annotationTypes.GraphQLType;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.sql.Date;

@Data
@NoArgsConstructor
@GraphQLType
@Accessors(chain = true)
public class AddNewPostResponseDto {

    @GraphQLField
    private String id;
    @GraphQLField
    private String text;
    @GraphQLField
    private String username;
    @GraphQLField
    private String updatedAt;
    //DAte???

}
