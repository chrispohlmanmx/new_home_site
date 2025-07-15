import yaml

def extract_frontmatter(path):
    with open(path) as f:
        lines = f.readlines()
        lines = [line.rstrip('\n') for line in lines]
    # pull out yaml frontmatter
    # find second --- which will be the end of the yaml
    end_index = lines.index('---', 1)

    frontmatter = "\n".join(lines[1:end_index])

    return yaml.safe_load(frontmatter)

if __name__ == "__main__":
    print(extract_frontmatter("book.md"))
