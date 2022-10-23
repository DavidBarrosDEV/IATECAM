# Generated by Django 4.1.2 on 2022-10-23 00:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(db_column='id', primary_key=True, serialize=False)),
                ('name', models.CharField(db_column='tx_name', max_length=128)),
            ],
            options={
                'db_table': 'category',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(db_column='id', primary_key=True, serialize=False)),
                ('name', models.CharField(db_column='tx_name', max_length=60)),
                ('price', models.DecimalField(db_column='price', decimal_places=2, max_digits=10)),
                ('serie', models.IntegerField(db_column='serie', unique=True)),
                ('category', models.ForeignKey(db_column='id_category', on_delete=django.db.models.deletion.DO_NOTHING, related_name='products', to='core.product')),
            ],
            options={
                'db_table': 'product',
                'managed': True,
            },
        ),
    ]
