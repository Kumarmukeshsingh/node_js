API REQUEST 

POST : http://localhost:8000/api/v1/users/register
 RES: {
    "statusCode": 200,
    "data": {
        "_id": "67529f7df4fe406680e27840",
        "username": "mukesh1209",
        "email": "mukes09@.com",
        "fullName": "mukesh singh",
        "avatar": "http://res.cloudinary.com/da70u3uzg/image/upload/v1733468027/ufj9slerdpkjtx0i30m9.png",
        "coverImage": "http://res.cloudinary.com/da70u3uzg/image/upload/v1733468028/cazstil3rxx2kczhuw58.png",
        "watchHistory": [],
        "createdAt": "2024-12-06T06:53:49.390Z",
        "updatedAt": "2024-12-06T06:53:49.390Z",
        "__v": 0
    },
    "message": "user registered successfully",
    "success": true
}

POST : http://localhost:8000/api/v1/users/login
 REQ: {
    "email":"singh@.com",
    "username":"singh123",
    "password":"singh123"
}

RES:{
    "statusCode": 200,
    "data": {
        "user": {
            "_id": "6752ab0d568c4101c2147784",
            "username": "singh123",
            "email": "singh@.com",
            "fullName": "singh",
            "avatar": "http://res.cloudinary.com/da70u3uzg/image/upload/v1733470962/nwmeqcsgdue9zgl3vmwj.png",
            "coverImage": "http://res.cloudinary.com/da70u3uzg/image/upload/v1733470988/j9mrftxsia4jdqnvhqdw.png",
            "watchHistory": [],
            "createdAt": "2024-12-06T07:43:09.260Z",
            "updatedAt": "2024-12-06T07:57:42.943Z",
            "__v": 0
        },
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzUyYWIwZDU2OGM0MTAxYzIxNDc3ODQiLCJlbWFpbCI6InNpbmdoQC5jb20iLCJ1c2VybmFtZSI6InNpbmdoMTIzIiwiZnVsbE5hbWUiOiJzaW5naCIsImlhdCI6MTczMzQ3MTg2MiwiZXhwIjoxNzMzNTU4MjYyfQ.qozxr31SKH0gm3HTgfzC6GZdWn4cx81v2Mc7FCWHso8",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzUyYWIwZDU2OGM0MTAxYzIxNDc3ODQiLCJpYXQiOjE3MzM0NzE4NjIsImV4cCI6MTczNDMzNTg2Mn0.FMo9hOm9QP_NeALVGuSfKx71-YKy_h1DYkVpLfPt2jQ"
    },
    "message": "User logged In Successfully",
    "success": true
}



GET:
PATCH/PUT:
DELETE:
