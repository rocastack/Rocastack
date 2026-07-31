from PIL import Image

def remove_white_bg():
    img = Image.open('public/loquiero.webp').convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # If the pixel is very bright (near white), make it transparent
        if item[0] > 220 and item[1] > 220 and item[2] > 220:
            newData.append((255, 255, 255, 0))
        else:
            # Keep the dark lines and colored accents opaque
            newData.append(item)
            
    img.putdata(newData)
    img.save('public/loquiero_transparent.webp', 'WEBP')
    print("Transparent image created.")

if __name__ == '__main__':
    remove_white_bg()
