package com.example.demo.payload.responses;

import graphql.annotations.annotationTypes.GraphQLField;
import graphql.annotations.annotationTypes.GraphQLType;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@NoArgsConstructor
@GraphQLType
@Accessors(chain = true)
public class RemovePostFromGroupResponseDto {
    @GraphQLField
    private String groupId;
    @GraphQLField
    private String postId;

}
