import csv, json, os

rows = []
csv_path = os.path.join(os.path.dirname(__file__), '../codes_and_database/out.csv')
with open(csv_path, encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        level = row['級別'].strip()
        cat = row['等別'].strip()
        word = row['詞語'].strip()
        pinyin = row['參考漢語拼音'].strip()
        zhuyin = row['參考注音'].strip()
        defn = row['definition'].strip()
        seq = row['序號'].strip()
        rows.append({
            'id': int(seq) if seq else 0,
            'w': word,
            'p': pinyin,
            'z': zhuyin,
            'd': defn,
            'l': level,
            'c': cat,
        })

print(f"Total: {len(rows)} words")
print("Sample:", json.dumps(rows[3], ensure_ascii=False))
levels = sorted(set(r['l'] for r in rows))
print("Levels:", levels)

out_path = os.path.join(os.path.dirname(__file__), 'data.json')
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(rows, f, ensure_ascii=False, separators=(',', ':'))
size = os.path.getsize(out_path)
print(f"data.json size: {size/1024:.1f} KB")

# Also generate data.js for file:// protocol compatibility
js_path = os.path.join(os.path.dirname(__file__), 'data.js')
with open(js_path, 'w', encoding='utf-8') as f:
    f.write('window.VOCAB_DATA=')
    json.dump(rows, f, ensure_ascii=False, separators=(',', ':'))
    f.write(';')
size2 = os.path.getsize(js_path)
print(f"data.js size: {size2/1024:.1f} KB")
