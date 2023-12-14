package Storage.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Storage.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Товар
 */
@Entity(name = "IISStorageТовар")
@Table(schema = "public", name = "Товар")
public class Tovar {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодТовара")
    private Integer кодтовара;

    @Column(name = "Название")
    private String название;

    @Column(name = "ЕдиницаИзмерения")
    private String единицаизмерения;

    @Column(name = "Описания")
    private String описания;

    @Column(name = "Цена")
    private Double цена;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "StrokaZakaza")
    @Convert("StrokaZakaza")
    @Column(name = "СтрокаЗаказа", length = 16, unique = true, nullable = false)
    private UUID _strokazakazaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "StrokaZakaza", insertable = false, updatable = false)
    private StrokaZakaza strokazakaza;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "TovarNaSklade")
    @Convert("TovarNaSklade")
    @Column(name = "ТоварНаСкладе", length = 16, unique = true, nullable = false)
    private UUID _tovarnaskladeid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "TovarNaSklade", insertable = false, updatable = false)
    private TovarNaSklade tovarnasklade;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZapisVNakladnoj")
    @Convert("ZapisVNakladnoj")
    @Column(name = "ЗаписьВНакладной", length = 16, unique = true, nullable = false)
    private UUID _zapisvnakladnojid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZapisVNakladnoj", insertable = false, updatable = false)
    private ZapisVNakladnoj zapisvnakladnoj;


    public Tovar() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодТовара() {
      return кодтовара;
    }

    public void setКодТовара(Integer кодтовара) {
      this.кодтовара = кодтовара;
    }

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }

    public String getЕдиницаИзмерения() {
      return единицаизмерения;
    }

    public void setЕдиницаИзмерения(String единицаизмерения) {
      this.единицаизмерения = единицаизмерения;
    }

    public String getОписания() {
      return описания;
    }

    public void setОписания(String описания) {
      this.описания = описания;
    }

    public Double getЦена() {
      return цена;
    }

    public void setЦена(Double цена) {
      this.цена = цена;
    }


}