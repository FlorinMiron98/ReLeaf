# Data Schema
## [Main README.md file](https://github.com/FlorinMiron98/ReLeaf/blob/main/README.md)
## Table of Contents
1. Author
2. Post
3. Comment
4. Relationships

## Author
| Column | Type | Constraints | Description |
| ------ | ---- | ----------- | ----------- |
| id | Integer (PK) | Auto-increment, Primary Key | Unique Identifier |
| first_name | VARCHAR(100) | NOT NULL | Author's first name |
| last_name | VARCHAR(100) | NOT NULL | Author's last name |
| email | VARCHAR | NOT NULL, Email format | Author's email address |

## Post
| Column | Type | Constraints | Description |
| ------ | ---- | ----------- | ----------- |
| id | Integer(PK) | Auto-increment, Primary Key | Unique Identifier |
| title | VARCHAR(150) | NOT NULL | Title fo the blog post |
| excerpt | VARCHAR(300) | NOT NULL | Short excerpt of the post |
| date | DATE | NOT NULL, auto-update | Date the post was last updated |
| image | VARCHAR(filepath) | Nullabe | File path for the post's image |
| image_alt | VARCHAR(255) | NOT NULL, Default value | Alt description for the image |
| slug | VARCHAR | UNIQUE, NOT NULL | URL-friendly unique identifier |
| admin_comment | TEXT | Min length 10 | Internal admin comment |
| author_id | Integer (FK) | Nullable, references `Author` | Foreign key to the author |

## Comment
| Column | Type | Constraints | Description |
| ------ | ---- | ----------- | ----------- |
| id | Ingeter (PK) | Auto-increment, Primary Key | Unique identifier |
| post_id | Integer(FK) | NOT NULL, references `Post` | Foreign key to the post |
| author_id | Integer(FK) | NOT NULL, reference `User` | Foreign key to the user |
| user_comment | TEXT | Min length 10, Max length 300 | The comment content |
| date | DATE | NOT NULL, auto-set on createion | Data comment was created |

## Relationships
- Author has many Posts (Author.id ← Post.author_id)
- Post has many Comments (Post.id ← Comment.post_id)
- User has many Comments (User.id ← Comment.author_id)
